import React, { useState } from 'react';
import PagerDefaut from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormFields';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    function handleChange(e) {
        setValue(
            e.target.getAttribute('name'),
            e.target.value
        );
    }

    return (
        <PagerDefaut>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={(event) => {
                event.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }
            }>
                <FormField
                    className="name"
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    className="description"
                    type='textarea'
                    placeholder="Descrição"
                    name="descricao"
                    id="descricaoCategoria"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <label>
                    Cor:
                        <FormField
                            className="cor"
                            type="color"
                            name="cor"
                            value={values.cor}
                            onChange={handleChange}
                         />

                </label>

                <button type="submit">
                    Cadastrar
                </button>

                <button className="limpar" type="reset">
                    Limpar
                </button>
            </form><br /><br /><br />

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>


            <Link to="/">
                Home
            </Link>
        </PagerDefaut>
    );
}

export default CadastroCategoria;