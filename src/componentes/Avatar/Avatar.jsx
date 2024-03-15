import './Avatar.css' 

const Avatar = (props) => {
    const [nome , sombrenome] = props.nome.split(' ');
    return <div className='avatar'>{nome[0] + sombrenome [0]}</div>
};
export default Avatar;