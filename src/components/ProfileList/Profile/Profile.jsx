import React, {useState} from "react"
import { useForm } from "react-hook-form"
import styles from './Profile.module.scss'

const Profile = ({user, disabled}) => {
    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [street, setStreet] = useState(user.address.street)
    const [city, setCity] = useState(user.address.city)
    const [zipcode, setZipcode] = useState(user.address.zipcode)
    const [website, setWebsite] = useState(user.website)


    const {
        register,
        formState: {
            errors
        },
        handleSubmit,

    } = useForm()


    const onSubmit = (data) => {
        console.log(data)
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={disabled} className={styles.fieldset}>
                    <label>
                        <span>Name</span>
                        <input {...register('name', {required:true})} id={errors?.name && styles.error} defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        <span>User name</span>
                        <input {...register('username', {required:true})} id={errors?.username && styles.error} defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        <span>E-mail</span>
                        <input {...register('email', {required:true})} id={errors?.email && styles.error} defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <span>Phone</span>
                        <input {...register('phone', {required:true})} id={errors?.phone && styles.error} defaultValue={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <label>
                        <span>Street</span>
                        <input {...register('street', {required:true})} id={errors?.street && styles.error} defaultValue={street} onChange={(e) => setStreet(e.target.value)} />
                    </label>
                    <label>
                        <span></span>City
                        <input {...register('city', {required:true})} id={errors?.city && styles.error} defaultValue={city} onChange={(e) => setCity(e.target.value)} />
                    </label>
                    <label>
                        <span>Zip code</span>
                        <input {...register('zipcode', {required:true})} id={errors?.zipcode && styles.error} defaultValue={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                    </label>
                    <label>
                        <span>Website</span>
                        <input {...register('website', {required:true})} id={errors?.website && styles.error} defaultValue={website} onChange={(e) => setWebsite(e.target.value)} />
                    </label>
                    <label>
                        <span>Comment</span>
                        <textarea {...register('comment')} />
                    </label>
                </fieldset>
            <button type="submit" disabled={disabled} className={styles.buttonSend}>Отправить</button>
            </form>
        </>
    )
}

export default Profile