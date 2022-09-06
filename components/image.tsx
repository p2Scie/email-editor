const image = () => {
    let data = "<mjml>\n" +
        "  <mj-body>\n" +
        "    <mj-section>\n" +
        "      <mj-column>\n" +
        "        <mj-image width=\"300px\" src=\"https://www.online-image-editor.com//styles/2014/images/example_image.png\" />\n" +
        "      </mj-column>\n" +
        "    </mj-section>\n" +
        "  </mj-body>\n" +
        "</mjml>"
    const sendData = () => {
        console.log(data)
    }

    return (
        <>
            <button onClick={sendData}>Image </button>

        </>
    )

};

export default image