import React from "react";
import type { StandardQuestionAsset } from "../data/standardQuestionBank";

export const StandardQuestionMedia: React.FC<{ assets?: StandardQuestionAsset[]; language?: "en" | "vi" }> = ({
  assets = [],
  language = "en",
}) => {
  const images = assets.filter((asset): asset is Extract<StandardQuestionAsset, { kind: "image" }> => asset.kind === "image");
  if (!images.length) return null;

  return (
    <div className="space-y-3">
      {images.map((asset, index) => (
        <figure key={`${asset.src}-${index}`} className="rounded-2xl border border-slate-200 bg-white p-3 overflow-hidden">
          <img
            src={asset.src}
            alt={(language === "vi" ? asset.altVi : asset.altEn) || asset.altVi || asset.altEn || "Hình minh họa của đề bài"}
            className="max-h-[420px] max-w-full mx-auto object-contain rounded-lg"
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  );
};
