import icon from '../imgs/icon.png';

const htmlTemplate = (item) => `
    <p>
        <span class="name"> 
            <img src=${icon} alt="icon"> 
            ${item.user}
        </span>
        <span class="scores">${item.score}</span>
    </p> 
`;
export default htmlTemplate;