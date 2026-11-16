import { IconImage, IconPlay } from "@/components/icons";

/** Lugar reservado para una foto o video real, hasta que lleguen los archivos. */
export function Placeholder({ label, video = false, className = "" }: { label: string; video?: boolean; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 bg-[#1a2337] p-4 text-center text-gris ${className}`}>
      {video ? (
        <span className="flex size-16 items-center justify-center rounded-full bg-fondo/70 text-white"><IconPlay size={26} /></span>
      ) : (
        <IconImage size={40} strokeWidth={1.4} />
      )}
      <span className="text-[15px] font-semibold">{label}</span>
    </div>
  );
}
