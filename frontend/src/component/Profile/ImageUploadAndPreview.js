import React from 'react'

export const ImageUploadAndPreview = () => {
    return (
        <div>
            <img src={require('../../assets/img/user.png')} alt=''/>
            <input type='file' className='image-upload-card' />
        </div>
    )
}
