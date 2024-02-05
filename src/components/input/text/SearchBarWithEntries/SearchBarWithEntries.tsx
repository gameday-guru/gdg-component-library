import React, {FC, ReactElement} from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Viusagelike } from '../../../../util/viusage/primary';
import { Wrapper, WrapperProps } from '../../../output';

export const SEARCH_BAR_WITH_ENTRIES_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2",
    "rounded"
];
export const SEARCH_BAR_WITH_ENTRIES_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    position : "relative",
    opacity : 1.0
};

export type SearchBarWithEntriesProps = {
     children ? : React.ReactNode;
    style ? : React.CSSProperties;
    overrideStyle ? : boolean;
    classNames ? : string[];
    overrideClasses ? : boolean;
    responsive ? : boolean;
    Entries ? : React.ReactNode[];
    inputProps ? : React.InputHTMLAttributes<HTMLInputElement>;
    viusage ? : Viusagelike;
    entriesHeight ? : React.CSSProperties["height"];
    entriesWrapperProps ? : WrapperProps["innerProps"]
};

export const SearchBarWithEntries : FC<SearchBarWithEntriesProps>  = (props) =>{

    return (
        <Wrapper
        onClick={(e)=>{
            e.stopPropagation()
        }}
        innerProps={props.entriesWrapperProps}
        viusage={props.viusage||"wrap"}
        classNames={[...!props.overrideClasses ? SEARCH_BAR_WITH_ENTRIES_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SEARCH_BAR_WITH_ENTRIES_STYLE : {}, ...props.style}}>
            <div style={{
                // zIndex : 200
            }}>
                <SearchBar 
                style={{
                    // zIndex : 200
                }}
                viusage={props.viusage}
                inputProps={props.inputProps}/>
            </div>
            {props.Entries?.length && <Wrapper 
            viusage={props.viusage||'wrap'}
            classNames={['p-2 rounded']} style={{
                // display : "grid",
                // gridTemplateColumns : "1fr",
                position : "absolute",
                // gridTemplateRows : "max-content",
                top : "100%",
                width : "100%",
                left : 0,
                zIndex : 20000,
                overflow : "scroll",
                height : props.entriesHeight
            }}>
                <div className='gap-2' style={{
                    width : "100%",
                    display : "grid",
                    gridTemplateColumns : "1fr",
                    zIndex : 20000
                }}>
                    {props.Entries}
                </div>
            </Wrapper>}
        </Wrapper>
    )
};