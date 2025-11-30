import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send contact form data via SMTP email
    Args: event with httpMethod POST, body with name, phone, email, project, comment
    Returns: HTTP response with success/error status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    body_data = json.loads(event.get('body', '{}'))
    name = body_data.get('name', 'Не указано')
    phone = body_data.get('phone', 'Не указан')
    client_email = body_data.get('email', 'Не указан')
    project = body_data.get('project', 'Не указан')
    comment = body_data.get('comment', 'Без комментариев')
    
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER', 'ruslan399885@gmail.com')
    smtp_password = os.environ.get('SMTP_PASSWORD', 'ruejntjtlyjshmei')
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка с сайта BarnHouse: {project}'
    msg['From'] = smtp_user
    msg['To'] = 'ruslan399885@gmail.com'
    
    html_body = f'''
    <html>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2563eb;">Новая заявка с сайта BarnHouse</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Имя:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Телефон:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email клиента:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{client_email}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Интересующий проект:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{project}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; vertical-align: top;"><strong>Комментарий:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">{comment}</td>
            </tr>
        </table>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Это письмо отправлено автоматически с сайта BarnHouse
        </p>
    </body>
    </html>
    '''
    
    msg.attach(MIMEText(html_body, 'html'))
    
    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'isBase64Encoded': False,
            'body': json.dumps({'success': False, 'error': str(e)})
        }