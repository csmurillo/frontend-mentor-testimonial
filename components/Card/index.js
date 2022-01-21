import React from 'react';
import styled from 'styled-components';

const Card = ({username='username',quotationPattern,userImage,verifiedGraduate,userMessage='mesage',userQuote='quote',backgroundColor,borderColor,textColor}) =>{
    return (
        <CardContentContainer color={backgroundColor}>
            {quotationPattern&&<QuotationContainer>
                <Quotation src="/images/bg-pattern-quotation.svg"></Quotation>
            </QuotationContainer>}
            <UserInfoContainer>
                <UserImage borderColor={borderColor} src={userImage}></UserImage>
                <UserDescription>
                    <div>
                        <UserName textColor={textColor}>{username}</UserName>
                        {verifiedGraduate?<VerifiedGraduate>Verified Graduate</VerifiedGraduate>:''}
                    </div>
                </UserDescription>
            </UserInfoContainer>
            <UserMessageContainer textColor={textColor}>
                {userMessage}
            </UserMessageContainer>
            <UserQuoteContainer>
                {userQuote}
            </UserQuoteContainer>
        </CardContentContainer>
    );
};
const CardContentContainer=styled.div`
    z-index:0;
    position:relative;
    width:100%;
    padding:40px 30px 40px 30px;
    background-color:white;
    border-radius:15px;
    background-color: ${props => props.color };
    color:hsl(0, 0%, 81%);
    @media (min-width: 1200px) {
        padding:18px 25px 18px 25px;
    }
`;
const QuotationContainer=styled.div`
    z-index:-2;
    position:absolute;
    top:0;
    right:30px;
    @media (min-width: 1200px) {
        right:15%;
    }
`;
const Quotation=styled.img`
    z-index:1;
`;

const UserInfoContainer=styled.div`
    display:flex;
    padding-bottom:14px;
    padding-bottom:15px;
`;
const UserImage=styled.img`
    width:40px; height:40px;
    border-radius:50%;
    border:${props=>props.borderColor+'2px solid'}
`;
const UserDescription=styled.div`
padding-left:25px;
display:flex;
align-items:center;
font-size:1.2em;
`;
const UserName=styled.div`
color:white;
color: ${props => props.textColor };
`;
const VerifiedGraduate=styled.div`
`;
const UserMessageContainer=styled.div`
    z-index:2;
    color:white;
    color: ${props => props.textColor };
    padding-bottom:10px;
    font-size:2em;
    @media (min-width: 1200px) {
        font-size: 1.6em;
        padding-bottom:15px;
    }
`;
const UserQuoteContainer=styled.div`
    font-size:1.2em;
    color:hsl(0, 0%, 70%);
    @media (min-width: 1200px) {
        font-size: 1.1em;
    }
`;

export default Card;