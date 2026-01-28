'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema, ResumeData } from '@/lib/resumeSchema';
import { submitResume } from '@/app/actions';
import { Loader2, Plus, Trash2, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ResumeForm({ roleSlug }: { roleSlug: string }) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; fileUrl?: string; error?: string } | null>(null);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        formState: { errors }
    } = useForm<ResumeData>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            skills: ['', '', ''],
            experience: [{ role: '', company: '', dates: '', bullets: [''] }]
        }
    });

    const { fields: expFields, append: appendExp, remove: removeExp } = useFieldArray({ control, name: 'experience' });
    const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({ control, name: 'skills' as any }); // Typescript quirk with array of strings

    const totalSteps = 5;

    const nextStep = async () => {
        let isValid = false;
        if (step === 1) isValid = await trigger('personal');
        if (step === 2) isValid = await trigger('summary'); // Summary is simple string
        if (step === 3) isValid = await trigger('experience');
        if (step === 4) isValid = await trigger(['skills', 'education']);

        if (isValid) setStep(s => s + 1);
    };

    const prevStep = () => setStep(s => s - 1);

    const onSubmit = async (data: ResumeData) => {
        setIsSubmitting(true);
        try {
            const res = await submitResume(data);
            setResult(res);
        } catch (e) {
            setResult({ success: false, error: 'Network error occurred.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (result?.success) {
        return (
            <div className="max-w-2xl mx-auto text-center py-12">
                <div className="mb-6 flex justify-center">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Resume Generated!</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                    Your ATS-optimized resume has been engineered successfully.
                </p>
                {result.fileUrl && result.fileUrl !== '#' ? (
                    <a
                        href={result.fileUrl}
                        className="btn btn-primary text-xl px-8 py-4 inline-flex items-center gap-2"
                        download
                    >
                        Download Word Doc
                    </a>
                ) : (
                    <p className="bg-yellow-50 p-4 rounded text-yellow-800 border border-yellow-200">
                        (Mock Mode) Webhook URL not set. Check console for payload.
                    </p>
                )}
                <div className="mt-8">
                    <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto w-full">
            {/* Step Indicator */}
            <div className="mb-8">
                <div className="flex justify-between text-sm font-medium text-muted-foreground mb-2">
                    <span>Step {step} of {totalSteps}</span>
                    <span>{Math.round((step / totalSteps) * 100)}% Complete</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300 ease-in-out"
                        style={{ width: `${(step / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Step 1: Personal */}
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-2xl font-bold">Personal Details</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <input {...register('personal.full_name')} className="input w-full p-3 border rounded-md" placeholder="e.g. Jane Doe" />
                                {errors.personal?.full_name && <p className="text-red-500 text-sm">{errors.personal.full_name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <input {...register('personal.email')} className="input w-full p-3 border rounded-md" placeholder="jane@example.com" />
                                {errors.personal?.email && <p className="text-red-500 text-sm">{errors.personal.email.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Phone</label>
                                <input {...register('personal.phone')} className="input w-full p-3 border rounded-md" placeholder="+1 (555) 000-0000" />
                                {errors.personal?.phone && <p className="text-red-500 text-sm">{errors.personal.phone.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Location</label>
                                <input {...register('personal.location')} className="input w-full p-3 border rounded-md" placeholder="New York, NY" type="text" />
                                {errors.personal?.location && <p className="text-red-500 text-sm">{errors.personal.location.message}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Summary */}
                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-2xl font-bold">Professional Summary</h2>
                        <p className="text-muted-foreground text-sm">Write a concise summary focused on your experience level and key achievements. We will format this for ATS readability.</p>
                        <div className="space-y-2">
                            <textarea
                                {...register('summary')}
                                className="w-full p-3 border rounded-md h-40"
                                placeholder="Experienced Business Analyst with 5+ years driving process improvements..."
                            />
                            {errors.summary && <p className="text-red-500 text-sm">{errors.summary.message}</p>}
                        </div>
                    </div>
                )}

                {/* Step 3: Experience */}
                {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Experience</h2>
                            <button type="button" onClick={() => appendExp({ role: '', company: '', dates: '', bullets: [''] })} className="text-blue-600 text-sm font-medium flex items-center">
                                <Plus className="w-4 h-4 mr-1" /> Add Role
                            </button>
                        </div>

                        {expFields.map((field, index) => (
                            <div key={field.id} className="p-4 border rounded-lg bg-slate-50 relative">
                                {index > 0 && (
                                    <button type="button" onClick={() => removeExp(index)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <input {...register(`experience.${index}.role`)} placeholder="Job Title" className="p-2 border rounded" />
                                    <input {...register(`experience.${index}.company`)} placeholder="Company" className="p-2 border rounded" />
                                    <input {...register(`experience.${index}.dates`)} placeholder="Dates (e.g. Jan 2020 - Present)" className="p-2 border rounded" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase text-slate-500">Achievements (One per line)</label>
                                    {/* Simplified UI: Just one text area for bullets for MVP simplicity, or array? Let's use array 0 for big text block split by newline? 
                                        Actually, let's keep it robust. Let's allow adding bullets. 
                                        For MVP speed, let's just make it a textarea and split by newline on submit? 
                                        No, schema expects array. Let's render one Textarea and split it in the component state? 
                                        Or just map one big textarea to index 0 and change schema? 
                                        Let's stick to simple single textarea that user enters bullets line by line. 
                                        But schema says `bullets: z.array(z.string())`.
                                        I'll stick to Field Array for experience but just ONE text area for bullets visually? 
                                        Actually, let's do this: 
                                        register(`experience.${index}.bullets.0`) as a textarea and instruct "One bullet per line".
                                        Then on submit we split? 
                                        No, React Hook Form binds to the path.
                                        Let's just iterate over bullets? Too complex UI.
                                        Let's just use ONE textarea and bind it to a helper, then useEffect to sync? 
                                        Or keep it simple: 1st bullet is "Main description/bullets".
                                        Let's assume user types formatted text.
                                        Okay, I will change the UI to a single textarea for bullets and manage the array manually or just ask for bullet 1, bullet 2.
                                        Let's provide 3 bullet inputs by default.
                                    */}
                                    <textarea
                                        {...register(`experience.${index}.bullets.0`)}
                                        placeholder="• Led project X resulting in Y...&#10;• Analyzed data to find Z..."
                                        className="w-full p-2 border rounded h-32"
                                    />
                                    <p className="text-xs text-muted-foreground">Enter your bullets. We will format them.</p>
                                </div>
                            </div>
                        ))}
                        {errors.experience && <p className="text-red-500 text-sm">{errors.experience.message}</p>}
                    </div>
                )}

                {/* Step 4: Skills & Education */}
                {step === 4 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-2xl font-bold">Skills & Education</h2>

                        <div className="space-y-4">
                            <label className="font-semibold block">Education</label>
                            <textarea
                                {...register('education')}
                                placeholder="B.S. Computer Science, University of Technology, 2018"
                                className="w-full p-3 border rounded-md h-24"
                            />
                            {errors.education && <p className="text-red-500 text-sm">{errors.education.message}</p>}
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <label className="font-semibold block">Top Skills</label>
                                <button type="button" onClick={() => appendSkill('')} className="text-xs text-blue-600">+ Add Skill</button>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {skillFields.map((field, index) => (
                                    <div key={field.id} className="flex gap-2">
                                        <input
                                            key={field.id} // important to include key with field's id
                                            {...register(`skills.${index}` as const)}
                                            className="p-2 border rounded w-full"
                                            placeholder="Skill"
                                        />
                                        <button type="button" onClick={() => removeSkill(index)} className="text-slate-400"><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                ))}
                            </div>
                            {errors.skills && <p className="text-red-500 text-sm">{errors.skills.message}</p>}
                        </div>
                    </div>
                )}

                {/* Step 5: Review & Pay */}
                {step === 5 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h2 className="text-2xl font-bold">Review & Download</h2>
                        <div className="bg-slate-50 p-6 rounded-lg border">
                            <p className="mb-4">You are about to generate an ATS-Optimized resume. This ensures:</p>
                            <ul className="list-disc pl-5 space-y-2 mb-6 text-sm text-muted-foreground">
                                <li>Strict ATS parseability</li>
                                <li>No hallucinated content</li>
                                <li>Recruiter-preferred layout</li>
                                <li>Word (.docx) format</li>
                            </ul>

                            <div className="flex items-center justify-between border-t pt-4">
                                <div>
                                    <span className="block font-bold text-lg">Total</span>
                                    <span className="text-sm text-slate-500">One-time payment</span>
                                </div>
                                <div className="text-2xl font-bold">$29.00</div>
                            </div>
                        </div>

                        {/* Placeholder Payment Element */}
                        <div className="p-4 border border-dashed border-blue-200 bg-blue-50 rounded text-center text-blue-700 text-sm">
                            Payment Integration Placeholder (Razorpay)
                        </div>

                        {result?.error && (
                            <div className="p-3 bg-red-100 text-red-700 rounded text-sm">
                                {result.error}
                            </div>
                        )}
                    </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between pt-6 border-t">
                    {step > 1 ? (
                        <button type="button" onClick={prevStep} className="btn border border-slate-300 hover:bg-slate-50">
                            <ChevronLeft className="w-4 h-4 mr-1" /> Back
                        </button>
                    ) : <div></div>} {/* Spacer */}

                    {step < totalSteps ? (
                        <button type="button" onClick={nextStep} className="btn btn-primary">
                            Next <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                    ) : (
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn-primary w-full md:w-auto min-w-[200px]"
                        >
                            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Pay & Generate Resume'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
