import Link from "next/link";
import UploadForm from "./UploadForm";

export default function Page() {
  return (
    <div>
      <h1>Let's select some photos!</h1>
      <UploadForm />
      <Link href="/">All done?</Link>
    </div>
  )
}
