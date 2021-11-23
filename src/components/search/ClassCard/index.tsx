import { Caption1, Card, CoverRatio } from "@class101/ui";
import CoverImage, { CoverImageProps } from "./CoverImage";
import ExtraBottom, { ExtraBottomProps } from "./ExtraBottom";

import { FunctionComponent } from "react";

export interface ClassCardProps extends CoverImageProps, ExtraBottomProps {
    id: number;
    title: string;
    creator: string;
}

const ClassCard: FunctionComponent<ClassCardProps> = ({
    id,
    thumbnail,
    title,
    creator,
    coupon,
    price,
    heart,
    satisfaction,
}) => {
    return (
        <Card
            title={title}
            coverImageRatio={CoverRatio.RATIO_4X3}
            coverImage={<CoverImage thumbnail={thumbnail} coupon={coupon} />}
            to={`/products/${id}`}
            extraTop={<Caption1 fontWeight={700}>{creator}</Caption1>}
            extraBottom={
                <ExtraBottom
                    heart={heart}
                    satisfaction={satisfaction}
                    price={price}
                />
            }
        />
    );
};

export default ClassCard;
