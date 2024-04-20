import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Download() {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = event.target.value;
    setUrl(newUrl);
    // Check if the URL starts with 'https://www.youtube.com/' and update the error state accordingly
    setError(newUrl.trim() !== '' && !newUrl.startsWith('https://www.youtube.com/'));
  };

  const handleDownload = () => {
    // Logic to handle download based on the URL
    if (url.trim() !== '') {
      console.log('Downloading from:', url);
    }
  };

  return (
    <section className="max-w-screen-xl mx-auto p-4 font-roboto flex items-center justify-center min-h-[50vh]">
      <div className="bg-transparent relative md:w-[980px] md:h-[75px] w-full h-16 mx-auto shadow-lg">
        <Input value={url} onChange={handleInputChange} error={error} />
        <Button error={error} onClick={handleDownload} />
      </div>
    </section>
  );
}
