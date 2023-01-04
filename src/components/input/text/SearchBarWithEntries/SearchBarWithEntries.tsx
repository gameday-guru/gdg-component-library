import React, {FC, ReactElement} from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Viusagelike } from '../../../../util/viusage/primary';
import { Wrapper } from '../../../output';

export const SEARCH_BAR_WITH_ENTRIES_CLASSNAMES : string[] = [ 
    "grid",
    "gap-2"
];
export const SEARCH_BAR_WITH_ENTRIES_STYLE : React.CSSProperties = {
    gridTemplateColumns : "1fr",
    position : "relative"
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
};

export const SearchBarWithEntries : FC<SearchBarWithEntriesProps>  = (props) =>{

    return (
        <Wrapper
        viusage={props.viusage||'wrap'}
        classNames={[...!props.overrideClasses ? SEARCH_BAR_WITH_ENTRIES_CLASSNAMES : [], ...props.classNames||[]]}
        style={{...!props.overrideStyle ? SEARCH_BAR_WITH_ENTRIES_STYLE : {}, ...props.style}}>
            <div style={{
                zIndex : 200
            }}>
                <SearchBar 
                style={{
                    zIndex : 200
                }}
                viusage={props.viusage}
                inputProps={props.inputProps}/>
            </div>
            {props.Entries?.length && <Wrapper 
            invert
            viusage={props.viusage||'wrap'}
            classNames={['gap-2 p-2 rounded']} style={{
                display : "grid",
                gridTemplateColumns : "1fr",
                position : "absolute",
                top : "100%",
                left : 0,
                zIndex : 100
            }}>
                <div>

                </div>
                {props.Entries}
            </Wrapper>}
        </Wrapper>
    )
};