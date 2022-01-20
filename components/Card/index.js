import React from 'react';
import styled from 'styled-components';

const Card = ({username='username',userImage,verifiedGraduate,userMessage='mesage',userQuote='quote',backgroundColor,textColor}) =>{
    return (
        <CardContentContainer color={backgroundColor}>
            <UserInfoContainer>
                <UserImage src={userImage}></UserImage>
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
    padding:30px;
    background-color:white;
    border-radius:15px;
    background-color: ${props => props.color };
    color:hsl(0, 0%, 81%);
`;
const UserInfoContainer=styled.div`
    display:flex;
    padding-bottom:20px;
`;
const UserImage=styled.img`
    width:40px; height:40px;
    border-radius:50%;
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
    color:white;
    color: ${props => props.textColor };
    padding-bottom:20px;
    font-size:2em;
`;
const UserQuoteContainer=styled.div`
    font-size:1.2em;
`;

export default Card;