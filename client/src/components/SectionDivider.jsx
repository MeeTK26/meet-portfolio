/**
 * SectionDivider: thin horizontal line with a moving highlight.
 * Use between major sections to suggest flow.
 */

export default function SectionDivider() {
  return (
    <div className="px-4">
      <div className="section-divider max-w-4xl">
        <div className="section-divider__glow" />
      </div>
    </div>
  );
}

