'use client';

import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { resumeSchema, ResumeData } from '@/lib/resumeSchema';
import { submitResume } from '@/app/actions';
import { Loader2, Plus, Trash2, ChevronRight, ChevronLeft, CheckCircle, Lock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResumeForm({ roleSlug }: { roleSlug: string }) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<{ success: boolean; fileUrl?: string; error?: string } | null>(null);
    const [isMobilePreviewOpen, setIsMobilePreviewOpen] = useState(false);

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
    const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({ control, name: 'skills' as any });

    // Strict 6-step flow + Confirmation (result handling)
    const totalSteps = 6;

    const nextStep = async () => {
        let isValid = false;
        // 1. Personal Details
        if (step === 1) isValid = await trigger('personal');
        // 2. Professional Summary
        if (step === 2) isValid = await trigger('summary');
        // 3. Skills (New separate step)
        if (step === 3) isValid = await trigger('skills');
        // 4. Work Experience
        if (step === 4) isValid = await trigger('experience');
        // 5. Education (New separate step)
        if (step === 5) isValid = await trigger('education');
        // 6. Review (No validation needed to enter, but validate all before submit if needed)

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
            <div className="max-w-2xl mx-auto text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="mb-6 flex justify-center">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready for Download</h2>
                <p className="text-slate-600 mb-8 text-lg">
                    Your resume has been successfully engineered and formatted impacting 100% of keywords.
                </p>
                {result.fileUrl && result.fileUrl !== '#' ? (
                    <a
                        href={result.fileUrl}
                        className="btn btn-primary text-lg px-8 py-4 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                        download
                    >
                        Download Word Document
                    </a>
                ) : (
                    <div className="bg-amber-50 p-4 rounded border border-amber-200 text-amber-900 text-sm">
                        <p className="font-semibold">Development Mode</p>
                        <p>Webhook URL is not configured. Check terminal logs for payload.</p>
                    </div>
                )}
                <div className="mt-8">
                    <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Return to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-12 gap-12">

            {/* LEFT COLUMN: FORM */}
            <div className="lg:col-span-7">
                {/* Step Indicator */}
                <div className="mb-8">
                    <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-semibold text-slate-900">Step {step} of {totalSteps}</span>
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Confidential & Secure</span>
                    </div>
                    <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-slate-900 transition-all duration-300 ease-in-out"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        />
                    </div>
                </div>

                {/* MOBILE PREVIEW COLLAPSIBLE */}
                <div className="lg:hidden mb-8 border border-slate-200 rounded-lg overflow-hidden">
                    <button
                        type="button"
                        onClick={() => setIsMobilePreviewOpen(!isMobilePreviewOpen)}
                        className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                        <div className="flex items-center text-slate-700 font-semibold text-sm">
                            <Lock className="w-4 h-4 mr-2" />
                            View Sample Output (Locked)
                        </div>
                        {isMobilePreviewOpen ? (
                            <ChevronLeft className="w-4 h-4 rotate-90 transition-transform" />
                        ) : (
                            <ChevronRight className="w-4 h-4 rotate-90 transition-transform" />
                        )}
                    </button>

                    {isMobilePreviewOpen && (
                        <div className="bg-slate-100 p-4 border-t border-slate-200 animate-in slide-in-from-top-2">
                            <div className="relative aspect-[8.5/11] w-full bg-white shadow-sm border border-slate-200">
                                <Image
                                    src="/template-preview.png"
                                    alt="ATS-Safe Resume Template Preview"
                                    fill
                                    className="object-contain"
                                />
                                <div className="absolute inset-0 bg-slate-900/5 pointer-events-none" />
                            </div>
                            <p className="text-xs text-center text-slate-500 mt-2">
                                "This format is fixed to ensure ATS compatibility. Only content changes."
                            </p>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 min-h-[400px]">

                    {/* Step 1: Personal */}
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Personal Details</h1>
                                <p className="text-slate-500 mt-1">Contact information for your resume header.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Full Name</label>
                                    <input {...register('personal.full_name')} className="input w-full p-3 border border-slate-300 rounded-md focus:ring-1 focus:ring-slate-800 outline-none" placeholder="Jane Doe" />
                                    {errors.personal?.full_name && <p className="text-red-600 text-xs mt-1">{errors.personal.full_name.message}</p>}
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input {...register('personal.email')} className="input w-full p-3 border border-slate-300 rounded-md focus:ring-1 focus:ring-slate-800 outline-none" placeholder="jane@example.com" />
                                    {errors.personal?.email && <p className="text-red-600 text-xs mt-1">{errors.personal.email.message}</p>}
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                    <input {...register('personal.phone')} className="input w-full p-3 border border-slate-300 rounded-md focus:ring-1 focus:ring-slate-800 outline-none" placeholder="+1 (555) 000-0000" />
                                    <p className="text-xs text-slate-400">Standard format including area code.</p>
                                    {errors.personal?.phone && <p className="text-red-600 text-xs mt-1">{errors.personal.phone.message}</p>}
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-medium text-slate-700">Location</label>
                                    <input {...register('personal.location')} className="input w-full p-3 border border-slate-300 rounded-md focus:ring-1 focus:ring-slate-800 outline-none" placeholder="New York, NY" />
                                    {errors.personal?.location && <p className="text-red-600 text-xs mt-1">{errors.personal.location.message}</p>}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Summary */}
                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Professional Summary</h1>
                                <p className="text-slate-500 mt-1">A concise overview of your value proposition. Recommended length: 3-4 sentences.</p>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Summary Text</label>
                                <textarea
                                    {...register('summary')}
                                    className="w-full p-3 border border-slate-300 rounded-md h-48 focus:ring-1 focus:ring-slate-800 outline-none resize-y"
                                    placeholder="Experienced Senior Business Analyst with 7+ years track record in..."
                                />
                                {errors.summary && <p className="text-red-600 text-xs mt-1">{errors.summary.message}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Skills (New Isolated Step) */}
                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Key Skills</h1>
                                <p className="text-slate-500 mt-1">Technical and domain competencies. We group these for ATS impact.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <label className="block text-sm font-medium text-slate-700">List Skills</label>
                                    <button type="button" onClick={() => appendSkill('')} className="text-xs font-semibold text-blue-800 hover:text-blue-900 border border-blue-200 bg-blue-50 px-3 py-1 rounded">+ Add Skill</button>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {skillFields.map((field, index) => (
                                        <div key={field.id} className="flex gap-2">
                                            <input
                                                key={field.id}
                                                {...register(`skills.${index}` as const)}
                                                className="p-2 border border-slate-300 rounded w-full focus:ring-1 focus:ring-slate-800 outline-none"
                                                placeholder="e.g. Requirement Gathering"
                                            />
                                            <button type="button" onClick={() => removeSkill(index)} className="text-slate-400 hover:text-red-600 px-2"><Trash2 className="w-4 h-4" /></button>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-500">Include hard skills (SQL, Jira) and soft skills (Stakeholder Management).</p>
                                {errors.skills && <p className="text-red-600 text-xs mt-1">{errors.skills.message}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Work Experience */}
                    {step === 4 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="flex justify-between items-end border-b pb-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-slate-900">Work Experience</h1>
                                    <p className="text-slate-500 mt-1">Reverse chronological order. Focus on results.</p>
                                </div>
                                <button type="button" onClick={() => appendExp({ role: '', company: '', dates: '', bullets: [''] })} className="text-slate-700 hover:text-slate-900 text-sm font-medium flex items-center border px-3 py-2 rounded bg-white shadow-sm">
                                    <Plus className="w-4 h-4 mr-2" /> Add Position
                                </button>
                            </div>

                            {expFields.map((field, index) => (
                                <div key={field.id} className="p-6 border border-slate-200 rounded-lg bg-slate-50 relative group">
                                    {index > 0 && (
                                        <button type="button" onClick={() => removeExp(index)} className="absolute top-4 right-4 text-slate-400 hover:text-red-600 transition-colors bg-white p-1 rounded border shadow-sm">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-slate-700">Job Title</label>
                                            <input {...register(`experience.${index}.role`)} placeholder="e.g. Senior Business Analyst" className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-slate-800 outline-none" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-slate-700">Company</label>
                                            <input {...register(`experience.${index}.company`)} placeholder="e.g. Global Corp" className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-slate-800 outline-none" />
                                        </div>
                                        <div className="space-y-1 md:col-span-2">
                                            <label className="text-sm font-medium text-slate-700">Dates</label>
                                            <input {...register(`experience.${index}.dates`)} placeholder="e.g. Jan 2020 - Present" className="w-full p-2 border border-slate-300 rounded focus:ring-1 focus:ring-slate-800 outline-none" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Key Achievements</label>
                                        <textarea
                                            {...register(`experience.${index}.bullets.0`)}
                                            placeholder="• Led cross-functional team...&#10;• Reduced costs by 15%..."
                                            className="w-full p-3 border border-slate-300 rounded h-32 focus:ring-1 focus:ring-slate-800 outline-none"
                                        />
                                        <p className="text-xs text-slate-500">One bullet per line. Start with strong action verbs.</p>
                                    </div>
                                </div>
                            ))}
                            {errors.experience && <p className="text-red-600 text-sm">{errors.experience.message}</p>}
                        </div>
                    )}

                    {/* Step 5: Education (New Isolated Step) */}
                    {step === 5 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div>
                                <h1 className="text-2xl font-bold text-slate-900">Education</h1>
                                <p className="text-slate-500 mt-1">Academic credentials and certifications.</p>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-medium text-slate-700">Education Details</label>
                                <textarea
                                    {...register('education')}
                                    placeholder="B.S. Information Systems, University of Technology, 2018"
                                    className="w-full p-3 border border-slate-300 rounded-md h-32 focus:ring-1 focus:ring-slate-800 outline-none"
                                />
                                <p className="text-xs text-slate-500">Degree, Major, University, and Year. One entry per line.</p>
                                {errors.education && <p className="text-red-600 text-xs mt-1">{errors.education.message}</p>}
                            </div>
                        </div>
                    )}

                    {/* Step 6: Review & Pay */}
                    {step === 6 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="border border-slate-200 rounded-lg overflow-hidden">
                                <div className="bg-slate-50 p-6 border-b border-slate-200">
                                    <h2 className="text-xl font-bold text-slate-900 mb-2">Review & Activate</h2>
                                    <p className="text-sm text-slate-500">Your resume is ready for final engineering.</p>
                                </div>
                                <div className="p-6 bg-white">
                                    <ul className="space-y-4 mb-8">
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                                            <div>
                                                <span className="block text-sm font-semibold text-slate-900">ATS-Safe Layout</span>
                                                <span className="text-xs text-slate-500">Strict single-column structure guaranteed to parse.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 shrink-0" />
                                            <div>
                                                <span className="block text-sm font-semibold text-slate-900">Senior Business Analyst Logic</span>
                                                <span className="text-xs text-slate-500">Keyword optimization applied to your inputs.</span>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                                        <div>
                                            <span className="block font-bold text-lg text-slate-900">Total</span>
                                            <span className="text-sm text-slate-500">One-time fee</span>
                                        </div>
                                        <div className="text-3xl font-bold text-slate-900">$29.00</div>
                                    </div>
                                </div>
                            </div>

                            {/* Placeholder Payment Element */}
                            <div className="p-6 border border-slate-200 bg-slate-50 rounded-lg text-center">
                                <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider mb-2 block">Secure Checkout</span>
                                <div className="h-10 border-2 border-dashed border-slate-300 rounded flex items-center justify-center text-slate-400 text-sm">
                                    [Payment Provider Component Area]
                                </div>
                                <p className="text-xs text-slate-400 mt-2">Payment is processed securely. Resume is generated instantly.</p>
                            </div>

                            {result?.error && (
                                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm">
                                    {result.error}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between pt-8 border-t border-slate-200 sticky bottom-0 bg-white/90 backdrop-blur pb-4">
                        {step > 1 ? (
                            <button type="button" onClick={prevStep} className="btn border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900">
                                <ChevronLeft className="w-4 h-4 mr-1" /> Back
                            </button>
                        ) : <div></div>}

                        {step < totalSteps ? (
                            <button type="button" onClick={nextStep} className="btn btn-primary px-8">
                                Continue <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn btn-primary w-full md:w-auto min-w-[200px] shadow-lg hover:shadow-primary/20"
                            >
                                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Complete & Download'}
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* RIGHT COLUMN: PREVIEW (TRUST SIGNAL) */}
            <div className="hidden lg:block lg:col-span-5">
                <div className="sticky top-8">
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-1">
                        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-slate-100 rounded-t-lg">
                            <div className="flex items-center text-slate-500">
                                <Lock className="w-3 h-3 mr-2" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Final ATS-Safe Format (Locked)</span>
                            </div>
                        </div>
                        <div className="relative aspect-[8.5/11] w-full overflow-hidden bg-white">
                            <Image
                                src="/template-preview.png"
                                alt="ATS-Safe Resume Template Preview"
                                fill
                                className="object-contain" // Contain ensures whole page visible
                            />
                            {/* Overlay Gradient to subtlely suggest it's a preview */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent pointer-events-none" />
                        </div>
                        <div className="p-4 bg-slate-100 text-center rounded-b-lg">
                            <p className="text-xs text-slate-500 font-medium">
                                "This format is fixed to ensure ATS compatibility. Only content changes."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
