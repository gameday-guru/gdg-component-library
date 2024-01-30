import React, { FC, ReactElement } from "react";
import { Wrapper } from "../../../components";
import { ConfirmTos } from "../../../assemblies/user/tos/ConfirmTos/ConfirmTos";
import { Sportsdataio } from "../../../components/output/icons/Sportsdataio/Sportsdataio";
import { Logo } from "../../../components/output/icons/Logo";
import { ontology } from "../../../util";

export const LOGIN_CLASSNAMES: string[] = [
  "h-screen",
  "w-screen",
  "grid",
  "justify-items-center",
  "justify-content-center",
  "items-center",
  "text-white-500",
  "gap-2",
];
export const LOGIN_STYLE: React.CSSProperties = {
  display: "grid",
  justifyContent: "center",
  justifyItems: "center",
  overflowY: "scroll",
  padding: 40,
};

export type TosProps = {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  overrideStyle?: boolean;
  classNames?: string[];
  overrideClasses?: boolean;
  confirmTos?: () => Promise<void>;
  tos?: ontology.Toslike;
};

export const Tos: FC<TosProps> = (props) => {
  return (
    <Wrapper
      viusage="backdrop"
      classNames={[
        ...(!props.overrideClasses ? LOGIN_CLASSNAMES : []),
        ...(props.classNames || []),
      ]}
      style={{ ...(!props.overrideStyle ? LOGIN_STYLE : {}), ...props.style }}
    >
      <Logo
        style={{
          width: 200,
        }}
      />
      <ConfirmTos confirmTos={props.confirmTos} tos={props.tos} />
    </Wrapper>
  );
};
