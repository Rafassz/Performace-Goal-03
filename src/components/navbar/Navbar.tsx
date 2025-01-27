import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home'>Farm+</Link>

                    <div className='flex gap-4'>
                        
                        <Link to='/categoria'>Categoria</Link>
                        <Link to='/cadastrar'>Cadastrar Categoria</Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar