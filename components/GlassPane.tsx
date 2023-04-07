import { Children } from "../types/ChildrenType";

export default function GlassPane({ children }: Children) {
  return (
    <div className="glass-container">
      <div className="glass">{children}</div>
    </div>
  );
}
