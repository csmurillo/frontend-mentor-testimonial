import React from 'react';
import styled from 'styled-components';

const Card = ({username='username',quotationPattern,userImage,verifiedGraduate,userMessage='mesage',userQuote='quote',backgroundColor,borderColor,textColor}) =>{
    return (
        <CardContentContainer backgroundColor={backgroundColor}>
                {quotationPattern&&<QuotationContainer>
                    <Quotation src="/images/bg-pattern-quotation.svg" alt='quotation for background container'></Quotation>
                </QuotationContainer>}
                <UserInfoContainer>
                    <UserImage borderColor={borderColor} src={userImage} alt='user image'></UserImage>
                    <UserDescription>
                        <div>
                            <UserName textColor={textColor}>{username}</UserName>
                            {verifiedGraduate?<VerifiedGraduate  textColor={textColor}>Verified Graduate</VerifiedGraduate>:''}
                        </div>
                    </UserDescription>
                </UserInfoContainer>
                <UserMessageContainer textColor={textColor}>
                    {userMessage}
                </UserMessageContainer>
                <UserQuoteContainer  textColor={textColor}>
                    {userQuote}
                </UserQuoteContainer>
        </CardContentContainer>
    );
};
const CardContentContainer=styled.section`
    z-index:0;
    position:relative;
    width:100%;
    // padding:40px 30px 40px 30px;
    padding:25px 30px;
    background-color:white;
    border-radius:15px;
    background-color: ${props => props.backgroundColor };
    color:hsl(0, 0%, 81%);
    @media (min-width: 1200px) {
        padding:20px 25.5px 20px 25.5px;
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
    // padding-bottom:14px;
    // padding-bottom:15px;
    margin-bottom:10px;
`;
const UserImage=styled.img`
    width:30px; height:30px;
    border-radius:50%;
    margin-right:20px;
    border:${props=>props.borderColor+'2px solid'}
`;
const UserDescription=styled.div`
display:flex;
align-items:center;
font-size:1.2em;
`;
const UserName=styled.div`
color:white;
color: ${props => props.textColor };
line-height:100%;
`;
const VerifiedGraduate=styled.div`
font-size:.85em;
color: ${props => props.textColor };
opacity:50%;
`;
const UserMessageContainer=styled.h1`
    padding:0;
    margin:0;
    font-size:1.65em;    
    line-height:1.25em;
    z-index:2;
    color:white;
    color: ${props => props.textColor };
    margin-bottom:15px;
    @media (min-width: 1200px) {
        font-size: 1.5em;
        font-weight:600;
        padding-right:10px;
        // padding-bottom:15px;
    }
`;
const UserQuoteContainer=styled.p`
    margin:0;
    padding:0;
    font-size:1.1em;
    font-weight:500;
    line-height:1.5em;
    color: ${props => props.textColor };
    @media (min-width: 1200px) {
        font-size: .96em;
        font-weight:500;
    }
`;

export default Card;