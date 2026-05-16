export default function BackgroundGlow() {
  return (
    <>
      <div
        className="
        fixed
        left-[-200px]
        top-[-200px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-indigo-500/20
        blur-[120px]
        "
      />

      <div
        className="
        fixed
        bottom-[-200px]
        right-[-200px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "
      />
    </>
  );
}