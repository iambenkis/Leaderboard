const htmlTemplate = (item) => `
    <p>
        <span class="name">${item.user}</span>
        <span class="scores">${item.score}</span>
    </p> 
`;
export default htmlTemplate;