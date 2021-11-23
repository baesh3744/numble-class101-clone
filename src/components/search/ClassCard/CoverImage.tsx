import {
    ButtonColor,
    Colors,
    HeartOutlineIcon,
    IconButton,
} from "@class101/ui";

import { FunctionComponent } from "react";
import styled from "styled-components";

export interface CoverImageProps {
    thumbnail: string;
    coupon: {
        price: number;
        installment: number;
    };
}

const CoverImageWrapper = styled.div`
    position: relative;
`;

const Image = styled.img`
    max-width: 100%;
    display: block;
    object-fit: cover;
    aspect-ratio: 4 / 3;
`;

const Coupon = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 11px;
    font-weight: 600;
    line-height: 16px;
    padding: 6px 8px;
    background-color: ${Colors.orange600};
    border-radius: 2px;
    color: ${Colors.white};
`;

const HeartButton = styled(IconButton)`
    position: absolute;
    top: 12px;
    right: 12px;
`;

const CoverImage: FunctionComponent<CoverImageProps> = ({
    thumbnail,
    coupon,
}) => {
    return (
        <CoverImageWrapper>
            <Image src={thumbnail} />
            <Coupon>{coupon.price / 10000}만원 쿠폰</Coupon>
            <HeartButton
                icon={<HeartOutlineIcon />}
                color={ButtonColor.TRANSPARENT}
                fillColor={Colors.white}
            />
        </CoverImageWrapper>
    );
};

export default CoverImage;
