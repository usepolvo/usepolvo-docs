# Secure Storage

**usepolvo** provides built-in support for secure storage of sensitive data. By using encryption, **usepolvo** ensures that your API keys and other sensitive information are stored securely.

## Benefits of Secure Storage

- Protection of sensitive data.
- Compliance with security standards.
- Peace of mind.

## Example: Storing API Keys Securely

Here's an example of how to store and retrieve API keys securely:

```python
from usepolvo.encryption import EncryptionManager

# Initialize the encryption manager with your encryption key
encryption_key = "your_generated_encryption_key"
encryption_manager = EncryptionManager(encryption_key)

# Encrypt and store the API key
api_key = "your_stripe_api_key"
encrypted_api_key = encryption_manager.encrypt(api_key)
print(f'Encrypted API Key: {encrypted_api_key}')

# Decrypt and use the API key
decrypted_api_key = encryption_manager.decrypt(encrypted_api_key)
print(f'Decrypted API Key: {decrypted_api_key}')
```