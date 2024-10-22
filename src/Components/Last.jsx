import Accordion from 'react-bootstrap/Accordion';

function LastComponent() {
  return (
    <div id="last">
    <div id="last1">
    <h1 id="faqs">FAQs</h1>
    <Accordion id="acc">
      <Accordion.Item eventKey="0" className='accitem'>
      <Accordion.Header className='acchead'>Is QTify free to use?</Accordion.Header>
      <Accordion.Body>
          Yes! It is 100% free,and it has 0% ads!
        </Accordion.Body> 
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='accitem'>
      <Accordion.Header className='acchead'>Can I download and listen to songs offline?</Accordion.Header>
        <Accordion.Body>
        Sorry, unfortunately we don't provide service to download any songs.
         </Accordion.Body>
         </Accordion.Item>
    </Accordion>
</div>
   
    </div> )
}

export default LastComponent;