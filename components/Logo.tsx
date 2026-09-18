import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  withWordmark?: boolean;
  className?: string;
};

export function Logo({ withWordmark = true, className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Fortis Ready home"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {/* Vector mark */}
      <Image
        src="/mark.svg"
        width={28}
        height={28}
        alt=""
        priority
        className="h-7 w-7"
      />
      {withWordmark && (
        <span className="font-semibold tracking-tight text-foreground">
          Fortis <span className="text-blue-500">Ready</span>
        </span>
      )}
    </Link>
  );
}

