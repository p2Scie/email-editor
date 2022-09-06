const imageGroup = () => {
    let data = "<mjml>\n" +
        "  <mj-body>\n" +
        "    <mj-section>\n" +
        "      <mj-group>\n" +
        "        <mj-column>\n" +
        "          <mj-image width=\"137px\" height=\"185px\" padding=\"0\" src=\"https://mjml.io/assets/img/easy-and-quick.png\" />\n" +
        "          <mj-text align=\"center\">\n" +
        "            <h2>Easy and quick</h2>\n" +
        "            <p>Write less code, save time and code more efficiently with MJML’s semantic syntax.</p>\n" +
        "          </mj-text>\n" +
        "        </mj-column>\n" +
        "        <mj-column>\n" +
        "          <mj-image width=\"166px\" height=\"185px\" padding=\"0\" src=\"https://mjml.io/assets/img/responsive.png\" />\n" +
        "          <mj-text align=\"center\">\n" +
        "            <h2>Responsive</h2>\n" +
        "            <p>MJML is responsive by design on most-popular email clients, even Outlook.</p>\n" +
        "          </mj-text>\n" +
        "        </mj-column>\n" +
        "      </mj-group>\n" +
        "    </mj-section>\n" +
        "  </mj-body>\n" +
        "</mjml>"
    const sendData = () => {
        console.log(data)
    }

    return (
        <>
            <button onClick={sendData}>Image group </button>

        </>
    )

};

export default imageGroup