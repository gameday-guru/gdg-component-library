import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { Button } from "../../../../components";
import { MockOver } from "../../../../components/output/MockOver";
import { ontology } from "../../../../util";
import { GithubMarkdownRender } from "../../../../util/markdown/react/Markdown";
import { MockTos } from "../../../../util/ontology";
import { Checkbox, FormControlLabel } from "@mui/material";

export const BLOG_ARTICLE_CLASSNAMES: string[] = ["grid", "p-4", "gap-2"];
export const BLOG_ARTICLE_STYLE: React.CSSProperties = {
  gridTemplateColumns: "1fr",
  width: 500,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export type ConfirmTosProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  overrideStyle?: boolean;
  classNames?: string[];
  overrideClasses?: boolean;
  responsive?: boolean;
  tos?: ontology.Toslike;
  confirmTos?: () => Promise<void>;
};

export const ConfirmTos: FC<ConfirmTosProps> = (props) => {
  const _blogArticle = props.tos || MockTos;
  const [isChecked, setChecked] = useState<boolean>(false);
  const [isScrolledToBottom, setScrolledToBottom] = useState<boolean>(false);
  const [isCheckboxEnabled, setCheckboxEnabled] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const element = contentRef.current;
    if (element) {
      const isBottom =
        element.scrollTop + element.clientHeight === element.scrollHeight;
      setScrolledToBottom(isBottom);

      // Enable the checkbox once scrolled to the bottom
      if (isBottom) {
        setCheckboxEnabled(true);
      }
    }
  };

  const handleCheckboxChange = () => {
    if (isCheckboxEnabled) {
      setChecked(!isChecked);
    }
  };

  const articleTitle = (
    <MockOver
      Content={<h2 className="text-2xl">{_blogArticle.title}</h2>}
      dependencies={[_blogArticle]}
    />
  );

  const articleContent = (
    <div
      ref={contentRef}
      style={{
        maxHeight: "500px",
        overflowY: "auto",
        margin: "0px 0px 30px 0px",
        padding: "0px 30px 0px 30px",
        textAlign: "left",
        borderRadius: "10px",
        backgroundColor: "rgba(52,53,65,.8)", // Light grey with translucency
      }}
      onScroll={handleScroll}
    >
      <MockOver
        Content={
          <GithubMarkdownRender>
            {_blogArticle.content || ""}
          </GithubMarkdownRender>
        }
        dependencies={[_blogArticle]}
      />
    </div>
  );

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: isCheckboxEnabled ? "none" : "auto",
  };

  const buttonStyle = isChecked
    ? {}
    : { backgroundColor: "#ccc", color: "#666" };

  return (
    <div
      className={[
        ...(!props.overrideClasses ? BLOG_ARTICLE_CLASSNAMES : []),
        ...(props.classNames || []),
      ].join(" ")}
      style={{
        ...(!props.overrideStyle ? BLOG_ARTICLE_STYLE : {}),
        ...props.style,
      }}
    >
      {articleTitle}
      <hr />
      {articleContent}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "16px",
          position: "relative",
        }}
      >
        {/* Overlay div to control interaction */}
        <div ref={overlayRef} style={overlayStyle} />
        {/* Material-UI Checkbox with larger size */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              disabled={!isCheckboxEnabled}
              style={{ color: isCheckboxEnabled ? "white" : "#ccc" }}
              size="medium"
            />
          }
          label={
            <span style={{ color: isCheckboxEnabled ? "white" : "#ccc" }}>
              I have read and accept the terms and conditions
            </span>
          }
        />
      </div>
      <Button
        viusage={"success"}
        onClick={props.confirmTos}
        disabled={!isScrolledToBottom || !isChecked}
        style={{ ...buttonStyle, padding: "10px" }}
      >
        Accept
      </Button>
    </div>
  );
};
