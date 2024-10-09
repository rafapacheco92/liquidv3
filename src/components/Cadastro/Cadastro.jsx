import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Cadastro.css'
import '../LoginCadastro.css'

function Cadastro() {

  const [isOver18, setIsOver18] = useState(false);


    const handleCheckboxChange = () => {
        setIsOver18(!isOver18);
      };

  return (
    <div className="cadastro-form">
              <h2>CADASTRO</h2>
              <Form>
                <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <FloatingLabel
                controlId="floatingInput"
                label="@Username"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="" />
              </FloatingLabel>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel controlId="floatingPassword" label="Senha">
                <Form.Control type="password" placeholder="Senha" />
              </FloatingLabel>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <FloatingLabel
                controlId="floatingPassword"
                label="Confirmar Senha"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </Form.Group>
          </Row>

                <Form.Group className="mb-3 formGroup" id="formGridCheckbox">
                    <Form.Check
                    type="checkbox"
                    label="Declaro que sou maior de 18 anos."
                    />
                </Form.Group>

                <Button className='form-button' variant="primary" type="submit">
                    Cadastrar
                </Button>
              </Form>
            </div>
  )
}

export default Cadastro
