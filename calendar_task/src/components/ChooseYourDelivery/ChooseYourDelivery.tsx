import React from 'react';
import moment, { Moment } from 'moment';
import van from '../../assets/van.svg';
import calendar from '../../assets/calendar.svg';
import './ChooseYourDelivery.sass';

interface ChooseYourDeliveryProps {
    date: Moment | null;
    onClick: () => void;
}

const ChooseYourDelivery = ({ date, onClick }: ChooseYourDeliveryProps) => {
    return (
        <div className="choose-your-delivery">
            <div className="choose-your-delivery__heading">
                <span className="choose-your-delivery__title">Choose your delivery day</span>
                <span className="choose-your-delivery__note">Delivery is always free</span>
            </div>

            <div className="choose-your-delivery__selection">
                <div className="choose-your-delivery__selection-date">
                    <span>{moment(date).format("dddd MMM D")}</span>
                    <span className="choose-your-delivery__earliest">
                        <img className="choose-your-delivery__icon" src={van} alt="van" />
                        <span className="choose-your-delivery__earliest-text">Earliest delivery</span>
                    </span>
                </div>
                <div className="choose-your-delivery__change-date">
                    <div className="choose-your-delivery__calendar">
                        <img className="choose-your-delivery__icon choose-your-delivery__selection-icon" src={calendar} alt="calendar" />
                        <span className="choose-your-delivery__current-day">{moment(date).format("D")}</span>
                    </div>
                    <button type="button" onClick={onClick} className="choose-your-delivery__change-button" data-automation="change-delivery-date-button">Change &gt;</button>
                </div>
            </div>      
        </div>
    );
};

export default ChooseYourDelivery;