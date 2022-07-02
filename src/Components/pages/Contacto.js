import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form'

const Contacto = () =>{

    const { register, handleSubmit, formState: { errors } } = useForm();
    const customSubmit = data => console.log(data);

    return (
        <div>
            <h2>Contactate con nosotros</h2>
            <div className="containerFormularioContacto">
                <form onSubmit={ handleSubmit(customSubmit) } className='formularioContacto'>
                    <TextField id="filled-basic"
                        label="Nombre y Apellido"
                        variant="filled"
                        {...register('name',{required: true})}
                    />
                    {errors.name && <small style={{color:'red'}}>Completar campo</small>}
                    <TextField id="filled-basic"
                        label="Telefono"
                        variant="filled"
                        {...register('phone',{required: true})}

                    />
                    {errors.phone && <small style={{color:'red'}}>Completar campo</small>}
                    <TextField id="filled-basic"
                        label="Email"
                        variant="filled"
                        {...register('email',{required: true})}
                    />
                    {errors.email && <small style={{color:'red'}}>Completar campo</small>}
                    <Button type='submit'>Enviar</Button>
                </form>
            </div>
        </div>
    )
}

export default Contacto