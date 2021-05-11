import React, {ComponentType, useState} from 'react';
import BonusTask from './BonusTask';
import {CodingTaskPropsType} from '../CodingTask/CodingTask';

function HOC<T extends CodingTaskPropsType >(BonusTask: ComponentType<T>) {
    const BonusTaskContainer: React.FC<T> = (props) => {
        const [isCollapsed, setCollapseMode] = useState(true);
        const onClickHandler = () => {
            setCollapseMode(!isCollapsed);
        }
        return <BonusTask {...props as T}
                           isCollapsed={isCollapsed}
                           onClickHandler={onClickHandler}/>
    }
    return BonusTaskContainer;
}

export const WithCollapseMode = HOC(BonusTask);
