const htmlTemplate = (item) => `
    <p>
        <span class="name"> 
            <img src="/imgs/icon.png" alt="icon"> 
            ${item.user}
        </span>
        <span class="scores">${item.score}</span>
    </p> 
`;
export default htmlTemplate;