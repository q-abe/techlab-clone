import React from "react";

import { Button } from "@/components/atoms/Button";
import {ArticleThumbnail} from "@/components/atoms/symbols/ArticleThumbnail";

export default function Home() {
  return (
    <div>
      <ArticleThumbnail/>
      <p>文字</p>
    </div>
  );
}
