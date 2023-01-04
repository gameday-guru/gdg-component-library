import React, {FC, ReactElement} from 'react';
import { SearchBar } from '../../../../components/input/text/SearchBar';
import { Bell, PersonCircle } from 'react-bootstrap-icons';
import { SearchBarWithEntries } from '../../../../components/input/text/SearchBarWithEntries';
import { WrapperProps } from '../../../../components';

export const SNU_CLASSNAMES : string[] = [
    "flex",
    "items-center",
    "gap-8"
];
export const SNU_STYLE : React.CSSProperties = {
};

export type SnuProps = {
    children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    size ? : number;
    SearchBarEntries ? : React.ReactNode[];
    searchBarInputProps ? : React.InputHTMLAttributes<HTMLInputElement>;
    searchBarEntriesWrapperProps ? : WrapperProps["innerProps"]
};

export const Snu : FC<SnuProps>  = (props) =>{

    return (
        <div
        className={[...!props.overrideClasses ? SNU_CLASSNAMES : [], ...props.classNames||[]].join(" ")}
        style={{...!props.overrideStyle ? SNU_STYLE : {}, ...props.style}}>
            <SearchBarWithEntries 
                entriesWrapperProps={props.searchBarEntriesWrapperProps}
                entriesHeight={300}
                inputProps={props.searchBarInputProps}
                Entries={props.SearchBarEntries}
                classNames={["rounded-full", "text-sm"]}/>
            <Bell size={props.size}/>
            <PersonCircle size={props.size}/>
        </div>
    )
};