import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log('ingredients', this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Test',
                address: {
                    street: 'test street',
                    zipCode: '123456',
                    country: 'testCountry'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then((response) => {
                console.log('response', response);
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log('error', error);
                this.setState({loading: false});
            });
    };

    render() {
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your Name"/>
                <input type="email" className={classes.Input} name="email" placeholder="Your Mail"/>
                <input type="text" className={classes.Input} name="street" placeholder="Your Street"/>
                <input type="text" className={classes.Input} name="postalcode" placeholder="Your Postal Code"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
