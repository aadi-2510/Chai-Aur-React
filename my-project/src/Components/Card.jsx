import React from 'react'

const Card = ({userName , designation = "front-end Developer" , body}) => {
    // designation variable is passed in props & front-end developer is the default value given for use case scnerios
    return (
        <>
            <figure className="bg-slate-700 rounded-lg p-8 m-2 text-slate-100">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/20308702/pexels-photo-20308702/free-photo-of-a-creek-runs-through-a-forested-area-with-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
                    <div className="pt-6 text-ce space-y-4">
                        <blockquote>
                            <p className="text-lg font-medium">
                                {(body)}
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                {(userName)}
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {(designation)}
                            </div>
                        </figcaption>
                    </div>
            </figure>
        </>
    )
}

export default Card