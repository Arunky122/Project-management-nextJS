import "@/styles/global.css";
import { Children } from "../../types/ChildrenType";
import GlassPane from "@/components/GlassPane";

export default function AuthRootLayout({ children }: Children) {
  return (
    <html>
      <head />
      <body className="auth-root-body">
        <GlassPane>{children}</GlassPane>
      </body>
    </html>
  );
}
