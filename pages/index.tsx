import type {NextPage} from 'next'

const Home: NextPage = () => {
    const treeViewStyle = {
        height: '100vh',
        backgroundColor: '#DCDCDC',
        flex: '1 0 auto',
        borderLeft: '6px solid #CCC'
    }

    const emailPreviewStyle = {
        height: '100vh',
        backgroundColor: '#F2F2F2',
        flex: '2.5 1 auto'
    }

    return (
        <>
            <div className="email-preview" style={emailPreviewStyle}></div>
            <div className="tree-view" style={treeViewStyle}></div>
        </>
    )
}

export default Home
