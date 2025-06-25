import UploadForm from "./UploadForm";
import { Button } from "@mui/material";

export default function Page() {
  return (
    <div>
      <h1>Let's select some photos!</h1>
      <UploadForm />
      <Button variant="contained" href="/">All done?</Button>

    </div>
  )
}
