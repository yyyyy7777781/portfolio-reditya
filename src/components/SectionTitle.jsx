function SectionTitle({ eyebrow, children, align = "center" }) {
  const isCenter = align === "center";
  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-cocoa-900">
        {children}
      </h2>
      <div
        className={`mt-5 flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className="h-px w-10 bg-gold-400" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
        <span className="h-px w-10 bg-gold-400" />
      </div>
    </div>
  );
}

export default SectionTitle;
