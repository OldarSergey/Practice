import React from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

function ModalOutputFAQ(props) {
  const { file } = props; // file содержит выбранный файл, handleClose закрывает модальное окно

  return (
    <Modal {...props} centered>
      <Modal.Header>
        <Modal.Title>Выбранный файл: {file.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {file.files.map((fileItem) => (
          <Card key={fileItem.id} style={{ marginBottom: '10px' }}>
            <Card.Body>
              <Card.Title>{fileItem.title}</Card.Title>
              <Card.Text>ID: {fileItem.id}</Card.Text>
              <Card.Text>URL: <a href={fileItem.fileURL}>{fileItem.fileURL}</a></Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalOutputFAQ;
