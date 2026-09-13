import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'
const RTE = ({name,control,label,defaultValue=''}) => {
  return (
    <div className='w-full'>
        {label && <label className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>}
    <Controller
    name={name||''}
    control={control}
    render={({field:{onChange}})=>(
        <Editor
        initialValue={defaultValue}
        init={{
            height: 500,
            menubar: false,
            plugins: [],
            toolbar: 'undo redo | formatselect | '
             + 'bold italic backcolor | alignleft aligncenter '
              + 'alignright alignjustify | bullist numlist outdent indent | '
               + 'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={onChange}
        />
    )}
    />
    </div>
  )
}

export default RTE