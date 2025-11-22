import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure"; 

const ServiceForm = () => {
  const axiosSecure = useAxiosSecure();
  const [heroPreview, setHeroPreview] = useState(null);
  const [sectionPreviews, setSectionPreviews] = useState({});

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      heroTitle: "",
      heroSubtitle: "",
      sections: [{ title: "", shortDescription: "", images: [] }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "sections",
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      
      formData.append("heroTitle", data.heroTitle);
      formData.append("heroSubtitle", data.heroSubtitle || "");
      if (data.heroImage?.[0]) {
        formData.append("heroImage", data.heroImage[0]);
      }

      const finalSections = data.sections.map((sec) => {
        const files = sec.images; 
        const imageNames = [];

        if (files && files.length > 0) {
          for (let i = 0; i < files.length; i++) {
            const file = files[i];
            imageNames.push(file.name);
            formData.append("sectionImages", file); 
          }
        }

        return {
          title: sec.title,
          shortDescription: sec.shortDescription,
          imageNames: imageNames,
        };
      });

      formData.append("sections", JSON.stringify(finalSections));

      const res = await axiosSecure.post("/services", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        toast.success("Service created successfully!");
        reset();
        setHeroPreview(null);
        setSectionPreviews({});
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    // Changed: Removed min-h-screen and center alignment to fit Dashboard layout better
    <div className="w-full flex justify-center pb-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl bg-zinc-800 p-4 md:p-8 rounded-xl shadow-xl border border-zinc-700 space-y-8"
      >
        <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-sky-400 drop-shadow-sm">
            Add New Service
            </h1>
            <p className="text-zinc-400 text-sm mt-1">Create a new service page for the application</p>
        </div>

        {/* --- Hero Section --- */}
        <div className="space-y-5 border-b border-zinc-700 pb-6">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-1 bg-sky-500 rounded-full"></div>
            <h2 className="text-xl font-semibold text-zinc-200">Hero Details</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-zinc-400 mb-1">Hero Title *</label>
                <input
                {...register("heroTitle", { required: true })}
                className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                placeholder="e.g. Premium Interior Design"
                />
                {errors.heroTitle && <span className="text-red-400 text-xs mt-1">Required</span>}
            </div>

            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-zinc-400 mb-1">Subtitle</label>
                <input
                {...register("heroSubtitle")}
                className="w-full bg-zinc-900/50 border border-zinc-700 text-white p-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                placeholder="Optional subtitle"
                />
            </div>

            <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-zinc-400 mb-1">Banner Image *</label>
                <div className="relative border-2 border-dashed border-zinc-600 rounded-lg p-4 hover:bg-zinc-700/30 transition-colors">
                    <input
                    type="file"
                    accept="image/*"
                    {...register("heroImage", { required: true })}
                    onChange={(e) => {
                        if(e.target.files?.[0]) {
                            setHeroPreview(URL.createObjectURL(e.target.files[0]));
                        }
                    }}
                    className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-500/10 file:text-sky-400 hover:file:bg-sky-500/20"
                    />
                </div>
                {heroPreview && (
                <div className="mt-4 relative rounded-lg overflow-hidden border border-zinc-600">
                    <img src={heroPreview} alt="Hero Preview" className="w-full h-48 object-cover" />
                </div>
                )}
            </div>
          </div>
        </div>

        {/* --- Dynamic Sections --- */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
             <div className="flex items-center space-x-2">
                <div className="h-6 w-1 bg-sky-500 rounded-full"></div>
                <h2 className="text-xl font-semibold text-zinc-200">Content Sections</h2>
            </div>
            {fields.length < 4 && (
              <button
                type="button"
                onClick={() => append({ title: "", shortDescription: "", images: [] })}
                className="bg-zinc-700 hover:bg-zinc-600 text-sky-400 border border-zinc-600 px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center"
              >
                + Add Section
              </button>
            )}
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="bg-zinc-900/50 p-4 md:p-6 rounded-xl border border-zinc-700/50 space-y-4 relative group hover:border-zinc-600 transition-colors">
              
              <div className="flex justify-between items-center">
                 <span className="text-xs font-bold uppercase tracking-wider text-sky-500/80 bg-sky-500/10 px-2 py-1 rounded">
                    Section {index + 1}
                 </span>
                 {fields.length > 1 && (
                   <button type="button" onClick={() => remove(index)} className="text-red-400 text-xs hover:text-red-300 transition-colors">
                     Remove
                   </button>
                 )}
              </div>

              <div className="grid grid-cols-1 gap-4">
                  <input
                    {...register(`sections.${index}.title`, { required: true })}
                    placeholder="Section Title"
                    className="w-full bg-zinc-800 border border-zinc-600 p-3 rounded-lg text-white focus:border-sky-500 outline-none"
                  />

                  <textarea
                    {...register(`sections.${index}.shortDescription`)}
                    placeholder="Description"
                    rows="3"
                    className="w-full bg-zinc-800 border border-zinc-600 p-3 rounded-lg text-white focus:border-sky-500 outline-none resize-none"
                  />

                  <div>
                    <label className="block text-xs mb-2 text-zinc-400">Section Images</label>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      {...register(`sections.${index}.images`)}
                      onChange={(e) => {
                        if (e.target.files) {
                          const urls = Array.from(e.target.files).map(f => URL.createObjectURL(f));
                          setSectionPreviews(prev => ({ ...prev, [index]: urls }));
                        }
                      }}
                      className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:bg-zinc-700 file:text-zinc-300 hover:file:bg-zinc-600"
                    />
                    
                    {/* Image Previews for this section */}
                    {sectionPreviews[index] && (
                      <div className="flex gap-3 mt-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-transparent">
                        {sectionPreviews[index].map((url, i) => (
                          <img key={i} src={url} alt="sec" className="h-20 w-28 object-cover rounded-lg border border-zinc-600 shadow-sm" />
                        ))}
                      </div>
                    )}
                  </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
            <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all transform hover:scale-[1.01]"
            >
            Publish Service
            </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceForm;