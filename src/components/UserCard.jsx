import './components.css';
import profile_pic from '../img/image-jeremy.png';


function UserCard () {
    return (
        <div id='user-card'>
            <div id='user-card-top'>
                <img className='profile-pic' src={profile_pic} alt="" />
                <p id='report-text'>Report for</p>
                <h1 className='name-text'>Jeremy</h1>
                <h1 className='name-text'>Robson</h1>
            </div>
            <ul>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
            
        </div>
    )
}

export default UserCard;