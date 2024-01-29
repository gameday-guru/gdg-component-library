import React, { FC, ReactElement, useState } from "react";
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

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const articleTitle = (
    <MockOver
      Content={<h2 className="text-2xl">{_blogArticle.title}</h2>}
      dependencies={[_blogArticle]}
    />
  );

  const articleContent = (
    <div
      style={{
        maxHeight: "500px",
        overflowY: "auto",
        margin: "0px 0px 50px 0px",
        padding: "0px 30px 0px 30px",
        textAlign: "left",
      }}
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
        }}
      >
        {/* Material-UI Checkbox with larger size */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ color: "white" }}
              size="medium"
            />
          }
          label="I have read and accept the terms and conditions"
        />
      </div>
      <Button
        viusage={"success"}
        onClick={props.confirmTos}
        disabled={!isChecked}
        style={{ ...buttonStyle, padding: "10px 50px 10px 50px" }}
      >
        Accept
      </Button>
    </div>
  );
};
