import {
    Badge,
    Colors,
    Divider,
    HeartIcon,
    IconProps,
    LikeIcon,
} from "@class101/ui";
import { Fragment, FunctionComponent, NamedExoticComponent } from "react";

import styled from "styled-components";

interface StyledBadgeProps {
    Icon: NamedExoticComponent<IconProps>;
    text: string;
}

export interface ExtraBottomProps {
    heart: number;
    satisfaction: number;
    price: {
        original: number;
        sale: number;
    };
}

const StyledDivider = styled(Divider)`
    margin: 10px 0;
`;

const PriceWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SaleRatio = styled.p`
    color: ${Colors.red500};
    font-size: 13px;
    font-weight: 700;
    margin-right: 6px;
`;

const Price = styled.p`
    font-size: 13px;
    font-weight: 700;
    margin-right: 8px;
`;

const Period = styled.small`
    color: ${Colors.gray600};
    font-size: 12px;
`;

const StyledBadge: FunctionComponent<StyledBadgeProps> = ({ Icon, text }) => {
    return (
        <Badge
            icon={<Icon fillColor={Colors.gray400} />}
            backgroundColor='transparent'
            color={Colors.gray400}
            size='md'
            style={{ height: "100%" }}
        >
            {text}
        </Badge>
    );
};

const ExtraBottom: FunctionComponent<ExtraBottomProps> = ({
    heart,
    satisfaction,
    price: { original, sale },
}) => {
    const saleRatio: number = Math.round((1 - sale / original) * 100);
    const monthlyPrice: string = (Math.round(sale / 50) * 10).toLocaleString();

    return (
        <Fragment>
            <StyledBadge Icon={HeartIcon} text={heart.toString()} />
            <StyledBadge Icon={LikeIcon} text={`${satisfaction}%`} />

            <StyledDivider color='#FAFAFA' />

            <PriceWrapper>
                <SaleRatio>{saleRatio}%</SaleRatio>
                <Price>월 {monthlyPrice}원</Price>
                <Period>(5개월)</Period>
            </PriceWrapper>
        </Fragment>
    );
};

export default ExtraBottom;
