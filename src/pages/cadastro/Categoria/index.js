import React, { useState } from 'react';
import PagerDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function useFormik({
    initialValues
}) {
    const [values, setValues] = useState(initialValues);

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        const value = event.target.value;
        setValues({
            ...values,
            [fieldName]: value,
        });
    }

    return {
        values,
        handleChange
    }
}

function CadastroCategoria() {
    const formik = useFormik({
        initialValues: {
            nomeCategoria: '',
            descricaoCategoria: '',
        }
    });

    return (
        <PagerDefaut>
            <h1>Cadastro de Categoria</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                window.alert(`Dados prontos para serem inseridos!`)
            }}>
                <input
                    className="name"
                    type="text"
                    placeholder="Nome"
                    name="nomeCategoria"
                    id="nomeCategoria"
                    onChange={formik.handleChange}
                    value={formik.values.nomeCategoria}
                /><br />


                <input
                    className="description"
                    type="text"
                    placeholder="Descrição"
                    name="descricaoCategoria"
                    id="descricaoCategoria"
                    onChange={formik.handleChange}
                    value={formik.values.descricaoCategoria}
                /> <br />

                <button type="submit">
                    Cadastrar
                </button>

                <button className="limpar" type="reset">
                    Limpar
                </button>
            </form><br /><br /><br />

            <Link to="/">
                Home
            </Link>
        </PagerDefaut>
    );
}

export default CadastroCategoria;