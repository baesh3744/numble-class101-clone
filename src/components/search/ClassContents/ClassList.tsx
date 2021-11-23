import ClassCard, { ClassCardProps } from "components/search/ClassCard";
import { FunctionComponent, useEffect, useState } from "react";

import { CLASS_DATA_URL } from "assets/constants/Urls";
import { GridList } from "@class101/ui";
import _ from "underscore";
import axios from "axios";

interface ClassListProps {
    category: string;
}

interface ClassDataResponse extends ClassCardProps {
    category: string;
}

const ClassList: FunctionComponent<ClassListProps> = ({ category }) => {
    const [classes, setClasses] = useState<ClassCardProps[]>([]);

    useEffect(() => {
        (async () => {
            const res = await axios.get(CLASS_DATA_URL);
            const newClasses: ClassCardProps[] = res.data
                .filter((data: ClassDataResponse) => data.category === category)
                .map((data: ClassDataResponse) =>
                    _.pick(data, [
                        "id",
                        "thumbnail",
                        "title",
                        "creator",
                        "coupon",
                        "price",
                        "heart",
                        "satisfaction",
                    ])
                );
            setClasses(newClasses);
        })();
    }, [category]);

    return (
        <GridList
            keyExtractor={(item) => item.id}
            items={classes}
            smColumn={3}
            renderItem={(item: ClassCardProps) => <ClassCard {...item} />}
        />
    );
};

export default ClassList;
