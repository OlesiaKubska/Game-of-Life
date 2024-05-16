import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`;

export const Title = styled.h1`
 text-align: center;
 margin-bottom: 20px;
`;

export const Board = styled.div`
 display: grid;
 grid-template-columns: repeat(${(props) => props.size}, 20px);
 gap: 1px;
`;

export const Cell = styled.div`
 width: 20px;
 height: 20px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 16px;
 cursor: pointer;
 background-color: white;
 border: 1px solid green;
 color: ${(props) => (props.$alive ? getRandomColor() : "transparent")};
 transition: color 0.3s;
`;

const getRandomColor = () => {
 const colors = ["#FF69B4", "#1E90FF", "#32CD32", "#FFD700", "#FF4500"];
 return colors[Math.floor(Math.random() * colors.length)];
};

export const ButtonContainer = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 20px;
 gap: 10px;
`;

export const Button = styled.button`
 padding: 10px 20px;
 background-color: #007bff;
 color: white;
 border: none;
 border-radius: 5px;
 cursor: pointer;

 &:hover {
  background-color: #0056b3;
 }
 &:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
 }
`;
